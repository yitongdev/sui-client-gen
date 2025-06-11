import { String } from "../../../_dependencies/source/0x1/string/structs/index.js";
import { TypeName } from "../../../_dependencies/source/0x1/type-name/structs/index.js";
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
import { VecMap } from "../../vec-map/structs/index.js";
import { VecSet } from "../../vec-set/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isTokenPolicy(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V31}::token::TokenPolicy` + "<");
}

export interface TokenPolicyFields<T extends PhantomTypeArgument> {
  id: ToField<UID>;
  spentBalance: ToField<Balance<T>>;
  rules: ToField<VecMap<String, VecSet<TypeName>>>;
}

export type TokenPolicyReified<T extends PhantomTypeArgument> = Reified<
  TokenPolicy<T>,
  TokenPolicyFields<T>
>;

/**
 * Move struct: `TokenPolicy`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @typeParam T - Type parameter 0 (phantom)
 */
export class TokenPolicy<T extends PhantomTypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::token::TokenPolicy`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = TokenPolicy.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::token::TokenPolicy<${PhantomToTypeStr<T>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T>];
  readonly $isPhantom = TokenPolicy.$isPhantom;

  readonly id: ToField<UID>;
  readonly spentBalance: ToField<Balance<T>>;
  readonly rules: ToField<VecMap<String, VecSet<TypeName>>>;

  private constructor(
    typeArgs: [PhantomToTypeStr<T>],
    fields: TokenPolicyFields<T>,
  ) {
    this.$fullTypeName = composeSuiType(
      TokenPolicy.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::token::TokenPolicy<${PhantomToTypeStr<T>}>`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.spentBalance = fields.spentBalance;
    this.rules = fields.rules;
  }

  static reified<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): TokenPolicyReified<ToPhantomTypeArgument<T>> {
    return {
      typeName: TokenPolicy.$typeName,
      fullTypeName: composeSuiType(
        TokenPolicy.$typeName,
        ...[extractType(T)],
      ) as `${typeof PKG_V31}::token::TokenPolicy<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`,
      typeArgs: [extractType(T)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<T>>,
      ],
      isPhantom: TokenPolicy.$isPhantom,
      reifiedTypeArgs: [T],
      fromFields: (fields: Record<string, any>) =>
        TokenPolicy.fromFields(T, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        TokenPolicy.fromFieldsWithTypes(T, item),
      fromBcs: (data: Uint8Array) => TokenPolicy.fromBcs(T, data),
      bcs: TokenPolicy.bcs,
      fromJSONField: (field: any) => TokenPolicy.fromJSONField(T, field),
      fromJSON: (json: Record<string, any>) => TokenPolicy.fromJSON(T, json),
      fromSuiParsedData: (content: SuiParsedData) =>
        TokenPolicy.fromSuiParsedData(T, content),
      fromSuiObjectData: (content: SuiObjectData) =>
        TokenPolicy.fromSuiObjectData(T, content),
      fetch: async (client: SuiClient, id: string) =>
        TokenPolicy.fetch(client, T, id),
      new: (fields: TokenPolicyFields<ToPhantomTypeArgument<T>>) => {
        return new TokenPolicy([extractType(T)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return TokenPolicy.reified;
  }

  static phantom<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): PhantomReified<ToTypeStr<TokenPolicy<ToPhantomTypeArgument<T>>>> {
    return phantom(TokenPolicy.reified(T));
  }
  static get p() {
    return TokenPolicy.phantom;
  }

  static get bcs() {
    return bcs.struct("TokenPolicy", {
      id: UID.bcs,
      spent_balance: Balance.bcs,
      rules: VecMap.bcs(String.bcs, VecSet.bcs(TypeName.bcs)),
    });
  }

  static fromFields<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    fields: Record<string, any>,
  ): TokenPolicy<ToPhantomTypeArgument<T>> {
    return TokenPolicy.reified(typeArg).new({
      id: decodeFromFields(UID.reified(), fields.id),
      spentBalance: decodeFromFields(
        Balance.reified(typeArg),
        fields.spent_balance,
      ),
      rules: decodeFromFields(
        VecMap.reified(String.reified(), VecSet.reified(TypeName.reified())),
        fields.rules,
      ),
    });
  }

  static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    item: FieldsWithTypes,
  ): TokenPolicy<ToPhantomTypeArgument<T>> {
    if (!isTokenPolicy(item.type)) {
      throw new Error("not a TokenPolicy type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return TokenPolicy.reified(typeArg).new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      spentBalance: decodeFromFieldsWithTypes(
        Balance.reified(typeArg),
        item.fields.spent_balance,
      ),
      rules: decodeFromFieldsWithTypes(
        VecMap.reified(String.reified(), VecSet.reified(TypeName.reified())),
        item.fields.rules,
      ),
    });
  }

  static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: Uint8Array,
  ): TokenPolicy<ToPhantomTypeArgument<T>> {
    return TokenPolicy.fromFields(typeArg, TokenPolicy.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
      spentBalance: this.spentBalance.toJSONField(),
      rules: this.rules.toJSONField(),
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
  ): TokenPolicy<ToPhantomTypeArgument<T>> {
    return TokenPolicy.reified(typeArg).new({
      id: decodeFromJSONField(UID.reified(), field.id),
      spentBalance: decodeFromJSONField(
        Balance.reified(typeArg),
        field.spentBalance,
      ),
      rules: decodeFromJSONField(
        VecMap.reified(String.reified(), VecSet.reified(TypeName.reified())),
        field.rules,
      ),
    });
  }

  static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    json: Record<string, any>,
  ): TokenPolicy<ToPhantomTypeArgument<T>> {
    if (json.$typeName !== TokenPolicy.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(TokenPolicy.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return TokenPolicy.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    content: SuiParsedData,
  ): TokenPolicy<ToPhantomTypeArgument<T>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isTokenPolicy(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a TokenPolicy object`,
      );
    }
    return TokenPolicy.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: SuiObjectData,
  ): TokenPolicy<ToPhantomTypeArgument<T>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isTokenPolicy(data.bcs.type)) {
        throw new Error(`object at is not a TokenPolicy object`);
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

      return TokenPolicy.fromBcs(typeArg, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return TokenPolicy.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T,
    id: string,
  ): Promise<TokenPolicy<ToPhantomTypeArgument<T>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching TokenPolicy object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isTokenPolicy(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a TokenPolicy object`);
    }

    return TokenPolicy.fromSuiObjectData(typeArg, res.data);
  }
}
