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
import { String } from "../../../move-stdlib-chain/string/structs/index.js";
import { TypeName } from "../../../move-stdlib-chain/type-name/structs/index.js";
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

export interface TokenPolicyFields<T0 extends PhantomTypeArgument> {
  id: ToField<UID>;
  spentBalance: ToField<Balance<T0>>;
  rules: ToField<VecMap<String, VecSet<TypeName>>>;
}

export type TokenPolicyReified<T0 extends PhantomTypeArgument> = Reified<
  TokenPolicy<T0>,
  TokenPolicyFields<T0>
>;

/**
 * Move struct: `TokenPolicy`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @typeParam T0 - Type parameter 0 (phantom)
 */
export class TokenPolicy<T0 extends PhantomTypeArgument>
  implements StructClass
{
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::token::TokenPolicy`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = TokenPolicy.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::token::TokenPolicy<${PhantomToTypeStr<T0>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T0>];
  readonly $isPhantom = TokenPolicy.$isPhantom;

  readonly id: ToField<UID>;
  readonly spentBalance: ToField<Balance<T0>>;
  readonly rules: ToField<VecMap<String, VecSet<TypeName>>>;

  private constructor(
    typeArgs: [PhantomToTypeStr<T0>],
    fields: TokenPolicyFields<T0>,
  ) {
    this.$fullTypeName = composeSuiType(
      TokenPolicy.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::token::TokenPolicy<${PhantomToTypeStr<T0>}>`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.spentBalance = fields.spentBalance;
    this.rules = fields.rules;
  }

  static reified<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): TokenPolicyReified<ToPhantomTypeArgument<T0>> {
    return {
      typeName: TokenPolicy.$typeName,
      fullTypeName: composeSuiType(
        TokenPolicy.$typeName,
        ...[extractType(T0)],
      ) as `${typeof PKG_V31}::token::TokenPolicy<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}>`,
      typeArgs: [extractType(T0)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<T0>>,
      ],
      isPhantom: TokenPolicy.$isPhantom,
      reifiedTypeArgs: [T0],
      fromFields: (fields: Record<string, any>) =>
        TokenPolicy.fromFields(T0, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        TokenPolicy.fromFieldsWithTypes(T0, item),
      fromBcs: (data: Uint8Array) => TokenPolicy.fromBcs(T0, data),
      bcs: TokenPolicy.bcs,
      fromJSONField: (field: any) => TokenPolicy.fromJSONField(T0, field),
      fromJSON: (json: Record<string, any>) => TokenPolicy.fromJSON(T0, json),
      fromSuiParsedData: (content: SuiParsedData) =>
        TokenPolicy.fromSuiParsedData(T0, content),
      fromSuiObjectData: (content: SuiObjectData) =>
        TokenPolicy.fromSuiObjectData(T0, content),
      fetch: async (client: SuiClient, id: string) =>
        TokenPolicy.fetch(client, T0, id),
      new: (fields: TokenPolicyFields<ToPhantomTypeArgument<T0>>) => {
        return new TokenPolicy([extractType(T0)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return TokenPolicy.reified;
  }

  static phantom<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): PhantomReified<ToTypeStr<TokenPolicy<ToPhantomTypeArgument<T0>>>> {
    return phantom(TokenPolicy.reified(T0));
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

  static fromFields<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    fields: Record<string, any>,
  ): TokenPolicy<ToPhantomTypeArgument<T0>> {
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

  static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    item: FieldsWithTypes,
  ): TokenPolicy<ToPhantomTypeArgument<T0>> {
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

  static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: Uint8Array,
  ): TokenPolicy<ToPhantomTypeArgument<T0>> {
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

  static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    field: any,
  ): TokenPolicy<ToPhantomTypeArgument<T0>> {
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

  static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    json: Record<string, any>,
  ): TokenPolicy<ToPhantomTypeArgument<T0>> {
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

  static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    content: SuiParsedData,
  ): TokenPolicy<ToPhantomTypeArgument<T0>> {
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

  static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: SuiObjectData,
  ): TokenPolicy<ToPhantomTypeArgument<T0>> {
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

  static async fetch<T0 extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T0,
    id: string,
  ): Promise<TokenPolicy<ToPhantomTypeArgument<T0>>> {
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
