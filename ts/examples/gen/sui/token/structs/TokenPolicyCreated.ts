import {
  PhantomReified,
  PhantomToTypeStr,
  PhantomTypeArgument,
  Reified,
  StructClass,
  ToField,
  ToPhantomTypeArgument,
  ToTypeStr,
  assertFieldsWithTypesArgsMatch,
  assertReifiedTypeArgsMatch,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  extractType,
  phantom,
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../_framework/util.js";
import { PKG_V31 } from "../../constants.js";
import { ID } from "../../object/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isTokenPolicyCreated(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V31}::token::TokenPolicyCreated` + "<");
}

export interface TokenPolicyCreatedFields<T extends PhantomTypeArgument> {
  id: ToField<ID>;
  isMutable: ToField<"bool">;
}

export type TokenPolicyCreatedReified<T extends PhantomTypeArgument> = Reified<
  TokenPolicyCreated<T>,
  TokenPolicyCreatedFields<T>
>;

/**
 * Move struct: `TokenPolicyCreated`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @typeParam T - Type parameter 0 (phantom)
 */
export class TokenPolicyCreated<T extends PhantomTypeArgument>
  implements StructClass
{
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::token::TokenPolicyCreated`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = TokenPolicyCreated.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::token::TokenPolicyCreated<${PhantomToTypeStr<T>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T>];
  readonly $isPhantom = TokenPolicyCreated.$isPhantom;

  readonly id: ToField<ID>;
  readonly isMutable: ToField<"bool">;

  private constructor(
    typeArgs: [PhantomToTypeStr<T>],
    fields: TokenPolicyCreatedFields<T>,
  ) {
    this.$fullTypeName = composeSuiType(
      TokenPolicyCreated.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::token::TokenPolicyCreated<${PhantomToTypeStr<T>}>`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.isMutable = fields.isMutable;
  }

  static reified<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): TokenPolicyCreatedReified<ToPhantomTypeArgument<T>> {
    return {
      typeName: TokenPolicyCreated.$typeName,
      fullTypeName: composeSuiType(
        TokenPolicyCreated.$typeName,
        ...[extractType(T)],
      ) as `${typeof PKG_V31}::token::TokenPolicyCreated<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`,
      typeArgs: [extractType(T)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<T>>,
      ],
      isPhantom: TokenPolicyCreated.$isPhantom,
      reifiedTypeArgs: [T],
      fromFields: (fields: Record<string, any>) =>
        TokenPolicyCreated.fromFields(T, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        TokenPolicyCreated.fromFieldsWithTypes(T, item),
      fromBcs: (data: Uint8Array) => TokenPolicyCreated.fromBcs(T, data),
      bcs: TokenPolicyCreated.bcs,
      fromJSONField: (field: any) => TokenPolicyCreated.fromJSONField(T, field),
      fromJSON: (json: Record<string, any>) =>
        TokenPolicyCreated.fromJSON(T, json),
      fromSuiParsedData: (content: SuiParsedData) =>
        TokenPolicyCreated.fromSuiParsedData(T, content),
      fromSuiObjectData: (content: SuiObjectData) =>
        TokenPolicyCreated.fromSuiObjectData(T, content),
      fetch: async (client: SuiClient, id: string) =>
        TokenPolicyCreated.fetch(client, T, id),
      new: (fields: TokenPolicyCreatedFields<ToPhantomTypeArgument<T>>) => {
        return new TokenPolicyCreated([extractType(T)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return TokenPolicyCreated.reified;
  }

  static phantom<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): PhantomReified<ToTypeStr<TokenPolicyCreated<ToPhantomTypeArgument<T>>>> {
    return phantom(TokenPolicyCreated.reified(T));
  }
  static get p() {
    return TokenPolicyCreated.phantom;
  }

  static get bcs() {
    return bcs.struct("TokenPolicyCreated", {
      id: ID.bcs,
      is_mutable: bcs.bool(),
    });
  }

  static fromFields<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    fields: Record<string, any>,
  ): TokenPolicyCreated<ToPhantomTypeArgument<T>> {
    return TokenPolicyCreated.reified(typeArg).new({
      id: decodeFromFields(ID.reified(), fields.id),
      isMutable: decodeFromFields("bool", fields.is_mutable),
    });
  }

  static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    item: FieldsWithTypes,
  ): TokenPolicyCreated<ToPhantomTypeArgument<T>> {
    if (!isTokenPolicyCreated(item.type)) {
      throw new Error("not a TokenPolicyCreated type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return TokenPolicyCreated.reified(typeArg).new({
      id: decodeFromFieldsWithTypes(ID.reified(), item.fields.id),
      isMutable: decodeFromFieldsWithTypes("bool", item.fields.is_mutable),
    });
  }

  static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: Uint8Array,
  ): TokenPolicyCreated<ToPhantomTypeArgument<T>> {
    return TokenPolicyCreated.fromFields(
      typeArg,
      TokenPolicyCreated.bcs.parse(data),
    );
  }

  toJSONField() {
    return {
      id: this.id,
      isMutable: this.isMutable,
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    field: any,
  ): TokenPolicyCreated<ToPhantomTypeArgument<T>> {
    return TokenPolicyCreated.reified(typeArg).new({
      id: decodeFromJSONField(ID.reified(), field.id),
      isMutable: decodeFromJSONField("bool", field.isMutable),
    });
  }

  static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    json: Record<string, any>,
  ): TokenPolicyCreated<ToPhantomTypeArgument<T>> {
    if (json.$typeName !== TokenPolicyCreated.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(TokenPolicyCreated.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return TokenPolicyCreated.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    content: SuiParsedData,
  ): TokenPolicyCreated<ToPhantomTypeArgument<T>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isTokenPolicyCreated(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a TokenPolicyCreated object`,
      );
    }
    return TokenPolicyCreated.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: SuiObjectData,
  ): TokenPolicyCreated<ToPhantomTypeArgument<T>> {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isTokenPolicyCreated(data.bcs.type)
      ) {
        throw new Error(`object at is not a TokenPolicyCreated object`);
      }

      const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs;
      if (gotTypeArgs.length !== 1) {
        throw new Error(
          `type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`,
        );
      }
      const gotTypeArg = gotTypeArgs[0] as string;
      const compressedGotType = compressSuiType(gotTypeArg);
      const expectedTypeArg = compressSuiType(extractType(typeArg));
      if (compressedGotType !== expectedTypeArg) {
        throw new Error(
          `type argument mismatch: expected '${expectedTypeArg}' but got '${compressedGotType}'`,
        );
      }

      return TokenPolicyCreated.fromBcs(typeArg, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return TokenPolicyCreated.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T,
    id: string,
  ): Promise<TokenPolicyCreated<ToPhantomTypeArgument<T>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching TokenPolicyCreated object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isTokenPolicyCreated(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a TokenPolicyCreated object`);
    }

    return TokenPolicyCreated.fromSuiObjectData(typeArg, res.data);
  }
}
