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
import { Balance } from "../../balance/structs/index.js";
import { PKG_V31 } from "../../constants.js";
import { UID } from "../../object/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isToken(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V31}::token::Token` + "<");
}

export interface TokenFields<T extends PhantomTypeArgument> {
  id: ToField<UID>;
  balance: ToField<Balance<T>>;
}

export type TokenReified<T extends PhantomTypeArgument> = Reified<
  Token<T>,
  TokenFields<T>
>;

/**
 * Move struct: `Token`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @typeParam T - Type parameter 0 (phantom)
 */
export class Token<T extends PhantomTypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::token::Token`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = Token.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::token::Token<${PhantomToTypeStr<T>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T>];
  readonly $isPhantom = Token.$isPhantom;

  readonly id: ToField<UID>;
  readonly balance: ToField<Balance<T>>;

  private constructor(typeArgs: [PhantomToTypeStr<T>], fields: TokenFields<T>) {
    this.$fullTypeName = composeSuiType(
      Token.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::token::Token<${PhantomToTypeStr<T>}>`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.balance = fields.balance;
  }

  static reified<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): TokenReified<ToPhantomTypeArgument<T>> {
    return {
      typeName: Token.$typeName,
      fullTypeName: composeSuiType(
        Token.$typeName,
        ...[extractType(T)],
      ) as `${typeof PKG_V31}::token::Token<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`,
      typeArgs: [extractType(T)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<T>>,
      ],
      isPhantom: Token.$isPhantom,
      reifiedTypeArgs: [T],
      fromFields: (fields: Record<string, any>) => Token.fromFields(T, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        Token.fromFieldsWithTypes(T, item),
      fromBcs: (data: Uint8Array) => Token.fromBcs(T, data),
      bcs: Token.bcs,
      fromJSONField: (field: any) => Token.fromJSONField(T, field),
      fromJSON: (json: Record<string, any>) => Token.fromJSON(T, json),
      fromSuiParsedData: (content: SuiParsedData) =>
        Token.fromSuiParsedData(T, content),
      fromSuiObjectData: (content: SuiObjectData) =>
        Token.fromSuiObjectData(T, content),
      fetch: async (client: SuiClient, id: string) =>
        Token.fetch(client, T, id),
      new: (fields: TokenFields<ToPhantomTypeArgument<T>>) => {
        return new Token([extractType(T)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Token.reified;
  }

  static phantom<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): PhantomReified<ToTypeStr<Token<ToPhantomTypeArgument<T>>>> {
    return phantom(Token.reified(T));
  }
  static get p() {
    return Token.phantom;
  }

  static get bcs() {
    return bcs.struct("Token", {
      id: UID.bcs,
      balance: Balance.bcs,
    });
  }

  static fromFields<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    fields: Record<string, any>,
  ): Token<ToPhantomTypeArgument<T>> {
    return Token.reified(typeArg).new({
      id: decodeFromFields(UID.reified(), fields.id),
      balance: decodeFromFields(Balance.reified(typeArg), fields.balance),
    });
  }

  static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    item: FieldsWithTypes,
  ): Token<ToPhantomTypeArgument<T>> {
    if (!isToken(item.type)) {
      throw new Error("not a Token type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return Token.reified(typeArg).new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      balance: decodeFromFieldsWithTypes(
        Balance.reified(typeArg),
        item.fields.balance,
      ),
    });
  }

  static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: Uint8Array,
  ): Token<ToPhantomTypeArgument<T>> {
    return Token.fromFields(typeArg, Token.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
      balance: this.balance.toJSONField(),
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
  ): Token<ToPhantomTypeArgument<T>> {
    return Token.reified(typeArg).new({
      id: decodeFromJSONField(UID.reified(), field.id),
      balance: decodeFromJSONField(Balance.reified(typeArg), field.balance),
    });
  }

  static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    json: Record<string, any>,
  ): Token<ToPhantomTypeArgument<T>> {
    if (json.$typeName !== Token.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(Token.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return Token.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    content: SuiParsedData,
  ): Token<ToPhantomTypeArgument<T>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isToken(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a Token object`,
      );
    }
    return Token.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: SuiObjectData,
  ): Token<ToPhantomTypeArgument<T>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isToken(data.bcs.type)) {
        throw new Error(`object at is not a Token object`);
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

      return Token.fromBcs(typeArg, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Token.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T,
    id: string,
  ): Promise<Token<ToPhantomTypeArgument<T>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching Token object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isToken(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a Token object`);
    }

    return Token.fromSuiObjectData(typeArg, res.data);
  }
}
